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

    const copyFromTo = {
      _gitignore: '.gitignore',
      [`${SRC}index.js`]: `${SRC}index.js`,
      'webpack.config.js': 'webpack.config.js'
    };

    Object.entries(copyFromTo).map(([from, to]) =>
      this.fs.copyTpl(
        this.templatePath(from),
        this.destinationPath(to)
      )
    );

    const packageJSON = {
      name: this.answers.name,
      version: '0.0.1',
      scripts: {
        start: `webpack-dev-server --content-base=src ${SRC}index.js --mode="development"`,
        build: 'NODE_ENV=prod webpack -p --progress'
      },
      babel: {
        presets: [ 'react', 'es2015', 'stage-0' ]
      }
    };

    this.fs.write('package.json', JSON.stringify(packageJSON, null, 2));
    this.fs.write('.nvmrc', '8');
  }

  install() {
    const devDependencies = [
      'webpack',
      'webpack-cli',
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

    this.npmInstall(devDependencies, { dev: true });
  }

  end() {
    this.fs.delete(this.destinationPath('.yo-rc.json'));
  }
};

