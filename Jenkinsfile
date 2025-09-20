pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub
                git branch: 'main', url: 'https://github.com/Manishr18/TodoList'
            }
        }

        stage('Build and Deploy Docker') {
            steps {
                // Make sure Docker Compose is installed on your Jenkins machine
                sh 'docker-compose down'
                sh 'docker-compose build'
                sh 'docker-compose up -d --force-recreate backend frontend mysql'
            }
        }
    }

    triggers {
        pollSCM('H/5 * * * *') // Poll GitHub every 5 minutes
    }
}
