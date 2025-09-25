// Allow legacy <marquee> element in TSX without type errors
// This provides a permissive type for any attributes used on <marquee>
declare namespace JSX {
  interface IntrinsicElements {
    marquee: any;
  }
}
