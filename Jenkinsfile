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
                bat 'docker-compose -p todolist up -d'
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Testing...'
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
                bat 'npm test'
            }
        }
        // stage('SonarQube') {
        //     steps {
        //         script {
        //             def scannerHome = tool 'sonar-scanner'
        //             echo "Using Sonar Scanner from: ${scannerHome}"
        //             withSonarQubeEnv('sonar-server') {
        //                 echo "Running SonarQube analysis for project: ${SONAR_PROJECT_KEY}"
        //                 bat "${scannerHome}\\bin\\sonar-scanner -Dsonar.projectKey=${SONAR_PROJECT_KEY}"
        //             }
        //         }
        //     }
        // }
        // stage('Quality Gate') {
        //     steps {
        //         script {
        //             timeout(time: 5, unit: 'MINUTES') {
        //                 def qualityGate = waitForQualityGate()
        //                 if (qualityGate.status != 'OK') {
        //                     error "SonarQube Quality Gate failed: ${qualityGate.status}"
        //                 } else {
        //                     echo "SonarQube analysis passed."
        //                 }
        //             }
        //         }
        //     }
        // }
        // stage('Deploy') {
        //     when {
        //         anyOf {
        //             expression { env.GIT_BRANCH == 'origin/main' }
        //         }
        //     }
        //     steps {
        //         script {
        //             echo "Deploying..."
        //             def backendResponse = httpRequest(
        //                 url: "${RENDER_BE_DEPLOY_HOOK}",
        //                 httpMode: 'POST',
        //                 validResponseCodes: '200:299'
        //             )
        //             echo "Response: ${backendResponse}"
        //         }
        //     }
        // }
    }

    post {
        success {
            bat 'docker-compose -p todolist down'
            echo 'Build was successful!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}