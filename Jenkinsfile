pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'ap-south-1'
    }
    stages {
        stage('Upload to S3') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 's3-user1']]) {
                        echo "Uploading content with AWS creds"
                        // List the contents of the directory to check if the file exists
                        sh 'ls -al /var/lib/jenkins/workspace/AWS-S3-Upload/'
                        // Upload the file to S3
                        s3Upload(file: '/var/lib/jenkins/workspace/AWS-S3-Upload/index.html', bucket: 'demo-bucket-15.com', path: '')
                    }
                }
            }
        }
    }
}
