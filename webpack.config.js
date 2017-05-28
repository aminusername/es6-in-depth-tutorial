module.exports = {
    //entry point for the application
    entry: ['babel-polyfill', './app/index.js'],

    //For output we are going to target bundle.js file which index.html is refering to
    //So when webpack converts index.js then it is going to move all the code from index.js to bundle.js
    output :{
        path: __dirname + '/build',
        filename: 'bundle.js'
        //Please not that __dirname is necessary otherwise it won't work. It seems it is related to the version of webpack
    },
    module: {
        //We specify objects for each loader
        loaders: [
            {
                loader: 'babel-loader', //it must know what files it should be looking for. \.js$ means look for all js files in the project
                //but we do not want all js files in the node_modules so we will exlude some
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        //It has 3 properties
        port: 3000,
        contentBase: './build', //our build folder
        inline: true //allows us to run automatic live code updating

    }
    
}