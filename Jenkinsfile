// Infrastructure as Code (IaC) Pipeline
// PIPELINE
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construindo os containers...'
                sh 'docker-compose up -d'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    // post {
    //     failure {
    //         bat "docker-compose down"
    //     }
    // }
            
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
