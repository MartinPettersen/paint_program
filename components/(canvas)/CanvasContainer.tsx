import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  TouchInfo,
  Skia,
  useTouchHandler,
  Canvas,
  useCanvasRef,
  Path,
  Rect,
} from "@shopify/react-native-skia";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { AdvancedPath } from "../../utils/types";
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';

type Props = {
  color: string;
  strokeWidth: number;
  paths: AdvancedPath[];
  setPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
  regretPaths: AdvancedPath[];
  setAction: any;
  setShareDrawingAction: any;

};

const CanvasContainer = ({
  color,
  strokeWidth,
  paths,
  setPaths,
  regretPaths,
  setAction,
  setShareDrawingAction,
}: Props) => {
  const [pathColor, setPathColor] = useState<string>(color);
  const [pathStrokeWidth, setPathStrokeWidth] = useState<number>(strokeWidth);
  const [forceUpdate, setForceUpdate] = useState(0);

  const touchStart = useCallback(
    (touchInfo: TouchInfo) => {
      setPaths((old) => {
        const { x, y } = touchInfo;
        const newPath = Skia.Path.Make();
        newPath.moveTo(x, y);
        const newAdvancedPath = {
          color: pathColor,
          strokeWidth: pathStrokeWidth,
          path: newPath,
        };
        return [...old, newAdvancedPath];
      });
    },
    [pathColor, pathStrokeWidth]
  );

  const touching = useCallback((touchInfo: TouchInfo) => {
    setPaths((currentPaths) => {
      const { x, y } = touchInfo;
      const currentPath = currentPaths[currentPaths.length - 1];
      const lastPoint = currentPath.path.getLastPt();
      const xMid = (lastPoint.x + x) / 2;
      const yMid = (lastPoint.y + y) / 2;
      currentPath.path.quadTo(lastPoint.x, lastPoint.y, xMid, yMid);
      return [...currentPaths.slice(0, currentPaths.length - 1), currentPath];
    });
  }, []);

  const handleTouch = useTouchHandler(
    {
      onActive: touching,
      onStart: touchStart,
    },
    [touching, touchStart]
  );

  useEffect(() => {
    setPathColor(color);
    setPathStrokeWidth(strokeWidth);
  }, [color, strokeWidth]);

  useEffect(() => {
    setForceUpdate((prev) => prev + 1);
  }, [regretPaths]);

  const ref = useCanvasRef();

  const saveImage = async (fileName: string) => {
    console.log("save image");
    const image = ref.current?.makeImageSnapshot();
    if (image) {
      console.log("is image");
      const bytes = image.encodeToBytes();

      try {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          console.error("Denied access to media library");
          return;
        }

        const base64Data = btoa(String.fromCharCode.apply(null, bytes));

        const tempFileUri = FileSystem.documentDirectory + fileName + ".jpg";
        await FileSystem.writeAsStringAsync(tempFileUri, base64Data, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const asset = await MediaLibrary.createAssetAsync(tempFileUri);

        const album = await MediaLibrary.getAlbumAsync("paintProgramImages");
        if (album === null) {
          await MediaLibrary.createAlbumAsync(
            "paintProgramImages",
            asset,
            false
          );
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }

        await FileSystem.deleteAsync(tempFileUri);

        console.log("Image saved successfully");
      } catch (error) {
        console.error("Error saving image:", error);
      }
    }
  };


  const handleSaveDrawing = async () => {
    if (ref.current) {
      const uri = await captureRef(ref, {
        format: 'jpg',
        quality: 1.0,
      });
      return uri;
    }
  };

  const handleShareDrawing = async () => {
    const imageUri = await handleSaveDrawing();
    if (imageUri && (await Sharing.isAvailableAsync())) {
      await Sharing.shareAsync(imageUri, {
        mimeType: 'image/png',
        dialogTitle: 'Perfect drawing to share',
      });
    } else {
      alert('Sharing is not available');
    }
  };

  useEffect(() => {
    setAction(() => saveImage);
    setShareDrawingAction(() => handleShareDrawing)
  }, []);

  return (
    <>
      <Canvas
        style={styles.canvas}
        onTouch={handleTouch}
        key={forceUpdate}
        ref={ref}
      >
        <Rect x={0} y={0} width={400} height={400} color="white" />
        {paths.map((path, index) => (
          <Path
            key={index}
            path={path.path}
            color={path.color}
            style={"stroke"}
            strokeWidth={path.strokeWidth}
          />
        ))}
      </Canvas>

    </>
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: "100%",
    height: 400,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    width: "100%",
  },
});

export default CanvasContainer;
