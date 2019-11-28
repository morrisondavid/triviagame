// Allow .ts files to import SVG images
declare module "*.svg" {
  const content: any;
  export default content;
}
