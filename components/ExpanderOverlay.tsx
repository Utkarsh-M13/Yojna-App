// components/ExpanderOverlay.tsx
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  rect: { x: number; y: number; width: number; height: number };
  onDone: () => void;
  children: React.ReactNode; // optional: render same card content here
};

export default function ExpanderOverlay({ rect, onDone, children }: Props) {
  const { width: sw, height: sh } = Dimensions.get('window');
  const insets = useSafeAreaInsets();

  const x = useSharedValue(rect.x);
  const y = useSharedValue(rect.y);
  const w = useSharedValue(rect.width);
  const h = useSharedValue(rect.height);
  const r = useSharedValue(12);

  useEffect(() => {
    const duration = 220;
    x.value = withTiming(0, { duration, easing: Easing.out(Easing.cubic) });
    y.value = withTiming(0, { duration, easing: Easing.out(Easing.cubic) });
    w.value = withTiming(sw, { duration, easing: Easing.out(Easing.cubic) });
    h.value = withTiming(sh, { duration, easing: Easing.out(Easing.cubic) }, () => {
      // call back on the JS thread after anim completes
      onDone();
    });
    r.value = withTiming(0, { duration });
  }, []);

  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: x.value,
    top: y.value,
    width: w.value,
    height: h.value,
    borderRadius: r.value,
  }));

  return (
    <Animated.View style={[styles.shadow, { paddingTop: insets.top }, style]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
});
