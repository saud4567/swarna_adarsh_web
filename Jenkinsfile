pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/saud4567/swarna_adarsh_web.git'
            }
        }
        stage('Upload to S3') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 's3-user1']]) {
                        echo "Uploading all content to S3 bucket"
                        // Upload all files to S3
                        s3Upload(file: '', workingDir: '/var/lib/jenkins/workspace/AWS-S3-Upload', bucket: 'demo-bucket-15', path: '')
                    }
                }
            }
        }
    }
}
