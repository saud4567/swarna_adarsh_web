pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saud4567/swarna_adarsh_web.git'
            }
        }
        stage('Upload to S3') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 's3-user1']]) {
                        echo "Uploading all content to S3 bucket"
                        s3Upload(bucket: 'demo-bucket-15.com', path: '', workingDir: '/var/lib/jenkins/workspace/AWS-S3-Upload', includePathPattern: '**/*')
                    }
                }
            }
        }
    }
}
