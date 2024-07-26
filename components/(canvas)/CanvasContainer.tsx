import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {
  SkPath,
  TouchInfo,
  Skia,
  useTouchHandler,
  Canvas,
  Path,
} from "@shopify/react-native-skia";

type Props = {
  color: string;
  strokeWidth: number;
};

type AdvancedPath = {
  color: string;
  strokeWidth: number;
  path: SkPath;
};

const CanvasContainer = ({ color, strokeWidth }: Props) => {
  const [paths, setPaths] = useState<AdvancedPath[]>([]);

  const [pathColor, setPathColor] = useState<string>(color);
  const [pathStrokeWidth, setPathStrokeWidth] = useState<number>(strokeWidth);


  const touchStart = useCallback(
    (touchInfo: TouchInfo) => {
      console.log(color, strokeWidth);
      console.log(pathColor, strokeWidth);

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
    console.log("me called " + color);
    setPathColor(color);
    setPathStrokeWidth(strokeWidth);

  }, [color, strokeWidth]);

  return (
    <Canvas style={styles.canvas} onTouch={handleTouch}>
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
  },
  container: {
    flex: 1,
    width: "100%",
  },
});

export default CanvasContainer;
