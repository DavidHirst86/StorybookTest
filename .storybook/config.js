import { configure, addDecorator, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';


// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
/*
//in theory adds ionic support but it just breaks instead
const wrap = templateFn => storyFn => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template),
  };
};
const ionicWrap = wrap(
  content =>
    `<ion-app>
  ${content}
  </ion-app>`
);

addDecorator(
  moduleMetadata({
    imports: [IonicModule.forRoot()],
  })
);
addDecorator(ionicWrap);
 */
configure(loadStories, module);

//https://github.com/storybookjs/storybook/issues/2629 what this is:
/*const genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Add .scss rule
  config.module.rules.unshift({
    test: /\.scss$/,
    loaders: ['raw-loader', 'sass-loader'],
  });

  // Overwrite default .css rule
  const cssRule = config.module.rules.find(rule => rule.test && rule.test.toString() === '/\\.css$/');
  if (cssRule) cssRule.exclude = /\.component\.css$/;

  return config;
};*/