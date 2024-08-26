const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // 진입점
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // 번들 파일 이름
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 확장자 설정
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader', // Babel 사용
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // 정적 파일 제공 폴더
    },
    compress: true,
    port: 3000,
    open: true, // 브라우저 자동 열기
  },
};