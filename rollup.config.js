import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/entry.ts',
  output: {
    format: 'esm',
    env: 'production',
    file: 'dist/zillion.esm.js'
  },
  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015'
    }),
    commonjs(),
    vue(),
  ],
  external: ['vue', 'vue-property-decorator']
}
