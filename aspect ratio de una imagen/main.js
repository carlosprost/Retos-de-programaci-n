function aspectRatio(url) {
  let aspectRatio = null;
  let img = new Image();
  img.src = url;
  aspectRatio = simplificar([img.width, img.height]);
  return aspectRatio;
}

function simplificar(arr, ns = 2) {
  let resultado = [];
  if (ns === null) {
    return arr;
  } else if (arr[0] % ns === 0 && arr[1] % ns === 0) {
    resultado = simplificar([arr[0] / ns, arr[1] / ns]);
  } else {
    resultado = simplificar([arr[0], arr[1]], aumentarSimplificador(ns));
  }
  return resultado;
}

function aumentarSimplificador(n) {
  let s = [2, 3, 5, 7, 11];
  let r = null;
  if (s.find((num) => num > n) !== s[s.length - 1]) {
    r = s.find((num) => num > n);
  }
  return r;
}

console.log(aspectRatio("https://picsum.photos/200/300"));
