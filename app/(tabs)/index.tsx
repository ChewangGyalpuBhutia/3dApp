import { Image, StyleSheet, Platform, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from '@/components/Model';
import useControls from 'r3f-native-orbitcontrols'
import { OrbitControls } from '@react-three/drei';

export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <Canvas>
        <OrbitControls enablePan={false}/>
        <directionalLight position={[1, 0, 0]} args={['white', 5]}/>
        <directionalLight position={[-1, 0, 0]} args={['white', 5]}/>
        <directionalLight position={[0, 1, 0]} args={['white', 5]}/>
        <directionalLight position={[0, -1, 0]} args={['white', 5]}/>
        <directionalLight position={[0, 0, 1]} args={['white', 5]}/>
        <directionalLight position={[0, 0, -1]} args={['white', 5]}/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
