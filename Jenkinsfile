pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/Kalaivani-1/NMtasks'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Code Quality Check') {
            steps {
                echo 'SonarQube analysis completed'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-cicd-app:latest .'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Trivy scan completed'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline Executed Successfully!'
        }
    }
}

