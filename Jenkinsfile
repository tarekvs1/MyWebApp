pipeline{
    agent any
    stages{
        stage("required-files"){
            steps{
                echo "checking project files..."
                script{
                if (!fileExists("index.html")){
                    error 'index.html is missing'
                }
                
                if (!fileExists("style.html")){
                    error 'style.html is missing'
                }
                /*
                or
                def requiredFiles[
                "index.html",
                "style.css",
                "script.js"
                ]
                for (file in requiredFiles){
                    if(!fileExits(file)){
                        error "missing file ${file}"
                    }
                }
                echo "${file} exists"
                echo "all required files are available"
                
                
                */
                }
            }

        }
        stage("javascript-test"){
            steps {
                echo 'checking javascript syntax...'
                bat "node --check script.js"
                echo "javascript syntax is valid"
            }
            /*
            script{
                bat(script="node --check script.js",returnStatus:true)
                if(returnstatus!=0){
                error "javascript syntax error detected"
                }
                echo "javascript syntax is valid"
            }
            
            */

        }
        stage("deploy"){
            steps{
            echo "deploying MyWebApp..."
            echo "deploying completed"
            }
        }
}
}