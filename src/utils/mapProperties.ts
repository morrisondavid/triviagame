export default function mapProperties(data: any): void {
  if (data) {
    const _me = this;
    Object.keys(data).forEach(key => {
      if (_me.hasOwnProperty(key)) {
        _me[key] = data[key];
      }
    });
  }
}
