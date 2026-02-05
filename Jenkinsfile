pipeline {
  agent any
  environment {
    IMAGE_NAME = "myportfolio"
    IMAGE_TAG= "latest"
    CONTAINER_NAME = "portfolio"
    }
    stages {
       stage('Checkout Code'){
       steps {
        git branch: 'main', url: 'https://github.com/rautrajess01/portfolio.git'
       }
       }
       stage ("Build Docker Image") {
       steps {
        sh ''' 
        docker build -t $IMAGE_NAME:$IMAGE_TAG .
        '''
       }
       }
       stage('Run Container')
       {
        steps{
          sh '''
          docker stop $CONTAINER_NAME || true
          docker rm $CONTAINER_NAME || true
          docker run -d --name $CONTAINER_NAME -p 8080:80 $IMAGE_NAME:$IMAGE_TAG
          '''
        }
       }
      }
}
