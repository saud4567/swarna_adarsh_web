pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/saud4567/swarna_adarsh_web.git', branch: 'main'
            }
        }
        stage('Upload to S3') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 's3-user1']]) {
                        sh 'aws s3 cp index.html s3://demo-bucket-15.com/'
                    }
                }
            }
        }
    }
}
