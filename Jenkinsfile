pipeline{
    agent any
    stages{
        stage("required-files"){
            steps{
                echo "checking project files..."
                script{
                    if (!fileExists('index.html')) {
                        error 'index.html is missing!'
                    }

                    if (!fileExists('style.css')) {
                        error 'style.css is missing!'
                    }

                    if (!fileExists('script.js')) {
                        error 'script.js is missing!'
                    }
                }

                echo 'All required files are available!'
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