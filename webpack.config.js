module.exports = {
    entry: './src/web/private/js/index.js',  
    output: {    
        path: __dirname + '/src/web/public/js/',    
        publicPath: '/',    
        filename: 'bundle.js'  
    }, 
    module: {
        rules: [
            {      
                test: /\.(js|jsx)$/,      
                exclude: /node_modules/,      
                use: ['babel-loader']    
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }    
        ]  
    },
};
