pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo "building MyWebApp..."
                echo "project preparation completed"
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