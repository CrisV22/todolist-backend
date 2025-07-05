pipeline {
    agent any

    environment {
        RENDER_API_KEY = credentials('render-api-key')
        RENDER_BE_DEPLOY_HOOK = credentials('render-todolist-backend')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Construindo os containers...'
                bat 'docker-compose up -d --build'
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Smoke tests API') {
            when {
                anyOf {
                    expression { env.GIT_BRANCH == 'origin/main' }
                }
            }
            steps {
                echo 'Smoke tests..'
            }
        }
        stage('Deploy') {
            when {
                anyOf {
                    expression { env.GIT_BRANCH == 'origin/main' }
                }
            }
            steps {
                script {
                    echo "Deploying..."
                    def backendResponse = httpRequest(
                        url: "${RENDER_BE_DEPLOY_HOOK}",
                        httpMode: 'POST',
                        validResponseCodes: '200:299'
                    )
                    echo "Response: ${backendResponse}"
                }
            }
        }
    }

    post {
        failure {
            bat "docker-compose down"
        }
    }
}