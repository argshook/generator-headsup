const Generator = require('yeoman-generator');

const SRC = 'src/';

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: this.appname,
        store: true
      }
    ]).then(answers => this.answers = answers);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${SRC}index.html`),
      this.destinationPath(`${SRC}index.html`),
      { title: this.answers.name }
    );

    this.fs.write(`${SRC}index.js`, 'console.log(\'hai\')');

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    const packageJSON = {
      name: this.answers.name,
      version: '0.0.1',
      scripts: {
        start: `webpack-dev-server --content-base=src ${SRC}index.js`,
        build: 'NODE_ENV=prod webpack -p --progress'
      },
      babel: {
        presets: [ 'react', 'es2015', 'stage-0' ]
      }
    };

    this.fs.write('package.json', JSON.stringify(packageJSON, null, 2));
    this.fs.write('.nvmrc', '7');
  }

  install() {
    const devDependencies = [
      'webpack',
      'webpack-dev-server',
      'autoprefixer',
      'autoprefixer-loader',
      'babel-core',
      'babel-loader',
      'babel-preset-es2015',
      'babel-preset-react',
      'babel-preset-stage-0',
      'css-loader',
      'deep-assign',
      'postcss',
      'postcss-loader',
      'precss',
      'style-loader'
    ];

    this.yarnInstall(devDependencies, { dev: true });
  }

  end() {
    this.fs.delete(this.destinationPath('.yo-rc.json'));
  }
};

