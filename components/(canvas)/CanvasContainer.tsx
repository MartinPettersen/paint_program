import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  TouchInfo,
  Skia,
  useTouchHandler,
  Canvas,
  Path,
} from "@shopify/react-native-skia";
import { AdvancedPath } from "../../utils/types";

type Props = {
  color: string;
  strokeWidth: number;
  paths: AdvancedPath[]
  setPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>
  regretPaths: AdvancedPath[];

};


const CanvasContainer = ({ color, strokeWidth, paths, setPaths, regretPaths }: Props) => {

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
    setForceUpdate(prev => prev + 1);
  }, [regretPaths]);

  return (
    <Canvas style={styles.canvas} onTouch={handleTouch} key={forceUpdate}>
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
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: "100%",
    height: 400,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    width: "100%",
  },
});

export default CanvasContainer;
