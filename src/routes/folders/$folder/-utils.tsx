
export const tryParse = (str: string): number | null => {
  try {
    return parseInt(str, 10);
  } catch {
    return null;
  }
}

export const imgSize = 292;

type ImgUrls = (idx: number, imgSize?: number) => string[];

export const imgUrls: ImgUrls = (idx) =>
  Array(10).fill(undefined).map((_, i) => `https://picsum.photos/id/${idx * 10 + i}/300/300`);
