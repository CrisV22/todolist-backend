// Infrastructure as Code (IaC) Pipeline
// PIPELINE
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construindo os containers...'
                bat 'docker-compose up ---build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                dir('frontend\\cypress') {
                    bat 'dir'
                    bat 'npm install'
                    bat 'npx cypress run'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    post {
        failure {
            bat "docker-compose down"
        }
    }
            
}

// // DOCKER_TEST
// docker ps

// // PIPELINE_TEST
// pipeline {
//     agent any

//     stages {
//         stage('stage-1') {
//             steps {
//                 echo "Executing stage-1";
//             }
//         }
//     }
// }
