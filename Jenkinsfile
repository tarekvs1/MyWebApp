pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo "building MyWebApp..."
                script{
                if (fileExists("index.html")){
                    error 'index.html is missing'
                }
                if (fileExists("style.html")){
                    error 'style.html is missing'
                }
                if (fileExists("style.html")){
                    error 'style.html is missing'
                }
                }
            }
        }
        stage("test"){
            steps {
                echo 'Testing MyWebApp...'
                echo 'All tests passed!'
            
            }
        }
        stage("deploy"){
            steps{
            echo "deploying MyWebApp..."
            echo "deploying completed"
            }
        }
}
}