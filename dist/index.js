"use strict";var l=function(a,v){return function(){try{return v||a((v={exports:{}}).exports,v),v.exports}catch(f){throw (v=0, f)}};};var g=l(function(U,E){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist'),C=require('@stdlib/complex-float32-real/dist'),D=require('@stdlib/complex-float32-imag/dist'),F=require('@stdlib/blas-base-ccopy/dist').ndarray,c=require('@stdlib/complex-float32-base-mul/dist').assign,x=5;function G(a,v,f,o,m,u,p,_){var e,s,n,t,r,i,w,j,y,q;if(a<=0)return u;if(n=C(v),t=D(v),n===1&&t===0)return F(a,f,o,m,u,p,_);if(e=d(f,0),s=d(u,0),r=m*2,i=_*2,w=o*2,j=p*2,o===1&&p===1){if(y=a%x,y>0)for(q=0;q<y;q++)c(n,t,e[r],e[r+1],s,1,i),r+=w,i+=j;if(a<x)return u;for(q=y;q<a;q+=x)c(n,t,e[r],e[r+1],s,1,i),c(n,t,e[r+2],e[r+3],s,1,i+2),c(n,t,e[r+4],e[r+5],s,1,i+4),c(n,t,e[r+6],e[r+7],s,1,i+6),c(n,t,e[r+8],e[r+9],s,1,i+8),r+=x*2,i+=x*2;return u}for(q=0;q<a;q++)c(n,t,e[r],e[r+1],s,1,i),r+=w,i+=j;return u}E.exports=G
});var b=l(function(V,O){
var M=require('@stdlib/strided-base-stride2offset/dist'),H=g();function I(a,v,f,o,m,u){return H(a,v,f,o,M(a,o),m,u,M(a,u))}O.exports=I
});var A=l(function(Y,z){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),K=g();J(k,"ndarray",K);z.exports=k
});var L=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=A(),R,B=P(L(__dirname,"./native.js"));Q(B)?R=S:R=B;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
