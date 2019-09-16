// https://github.com/postcss/autoprefixer
// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev

let conf = {
  plugins: [
    require('autoprefixer'), // автоустановка префиксов
    require('css-mqpacker'), // группировка media-запросов
    require('cssnano') ({
      preset: [
        'default', {
          discardComments: { // удаление комментариев в production
            removeAll: true
          }
        }
      ]
    })
  ]
  //devtool: 'eval-sourcemap' // дает возможность посмотреть в отладке исходные тексты --dev--
};

module.exports = conf;
/*
module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production? 'source-map' : 'eval-sourcemap'; // на лету подменяем sourcemap
  //conf.devtool = production? false : 'eval-sourcemap'; // вообще отменили sourcemap для production
  return conf;
};
*/