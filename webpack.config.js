const path = require('path');

const config = {

    entry:'./src/index.js',
    output:
    {
        path: path.resolve(__dirname,'dist'),
        
        filename: 'bundlie.js',

        publicPath:'dist'


      },
    module:{
          rules: [
              {
                  test:/\.js$/,
                  use:
                  {
                      loader: 'babel-loader'
                  }
              }

          ]

      }

}
module.exports=config; 