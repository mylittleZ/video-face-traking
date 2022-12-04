
export default [
  {
    path: '/',
    redirect: '/video-face-traking'
  },
  {
    path: "/video-face-traking",
    name: "Video人脸识别",
    component: () => import("@/views/VideoFaceRecognition.vue"),
  },
];
