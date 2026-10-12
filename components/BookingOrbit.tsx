"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BookingOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const orbit = new THREE.Group();
    scene.add(orbit);
    scene.add(new THREE.HemisphereLight(0xf3e7ff, 0x3c096c, 2.1));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(-3, 4, 5);
    scene.add(keyLight);

    const violetLight = new THREE.PointLight(0xc77dff, 11, 8);
    violetLight.position.set(2, 1, 2.5);
    scene.add(violetLight);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.86, 48, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0xc77dff,
        emissive: 0x3c096c,
        emissiveIntensity: 0.28,
        metalness: 0.28,
        roughness: 0.3,
        clearcoat: 0.85,
        transparent: true,
        opacity: 0.78,
      }),
    );
    orbit.add(sphere);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0aaff,
      emissive: 0x9d4edd,
      emissiveIntensity: 0.38,
      metalness: 0.55,
      roughness: 0.32,
      transparent: true,
      opacity: 0.82,
    });

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.36, 0.014, 8, 128),
      ringMaterial,
    );
    innerRing.rotation.set(0.9, 0.2, 0.35);
    orbit.add(innerRing);

    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.95, 0.02, 8, 160),
      ringMaterial.clone(),
    );
    outerRing.rotation.set(1.15, -0.45, -0.2);
    orbit.add(outerRing);

    const dial = new THREE.Group();
    dial.rotation.set(0.92, 0.18, 0.22);
    const dialMaterial = new THREE.MeshStandardMaterial({
      color: 0xf3ebff,
      emissive: 0xc77dff,
      emissiveIntensity: 0.45,
      metalness: 0.25,
      roughness: 0.36,
    });

    for (let hour = 0; hour < 24; hour += 1) {
      const angle = (hour / 24) * Math.PI * 2;
      const isMajorMark = hour % 6 === 0;
      const mark = new THREE.Mesh(
        new THREE.BoxGeometry(
          isMajorMark ? 0.045 : 0.025,
          isMajorMark ? 0.16 : 0.09,
          0.035,
        ),
        dialMaterial,
      );
      mark.position.set(Math.cos(angle) * 1.72, Math.sin(angle) * 1.72, 0);
      mark.rotation.z = angle - Math.PI / 2;
      dial.add(mark);
    }

    orbit.add(dial);

    const clockHands = new THREE.Group();
    clockHands.position.z = 1.12;
    scene.add(clockHands);

    const hourHand = new THREE.Group();
    const hourHandMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.055, 0.4, 0.025),
      new THREE.MeshBasicMaterial({ color: 0xc77dff }),
    );
    hourHandMesh.position.y = 0.19;
    hourHand.add(hourHandMesh);
    clockHands.add(hourHand);

    const minuteHand = new THREE.Group();
    const minuteHandMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.035, 0.63, 0.025),
      new THREE.MeshBasicMaterial({ color: 0xf3ebff }),
    );
    minuteHandMesh.position.y = 0.3;
    minuteHand.add(minuteHandMesh);
    clockHands.add(minuteHand);

    const handPivot = new THREE.Mesh(
      new THREE.SphereGeometry(0.065, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xf3ebff }),
    );
    clockHands.add(handPivot);

    const satelliteOrbit = new THREE.Group();
    satelliteOrbit.rotation.set(0.8, 0.3, 0.1);
    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xf3ebff }),
    );
    satellite.position.x = 2.02;
    satelliteOrbit.add(satellite);
    orbit.add(satelliteOrbit);

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;

      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      orbit.position.x = 0;
    });
    resizeObserver.observe(container);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        orbit.rotation.y += 0.0014;
        orbit.rotation.x += 0.0005;
        satelliteOrbit.rotation.z += 0.002;
        hourHand.rotation.z -= 0.001;
        minuteHand.rotation.z -= 0.007;
        sphere.scale.setScalar(1 + Math.sin(performance.now() * 0.0007) * 0.025);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="booking-visual" aria-hidden="true" />;
}