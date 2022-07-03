pipeline {
    agent any
    stages {
        stage("deploy"){
            steps {
                sh ./cli/./deploy.sh
            }
        }
    }

    post{
        success{
            slackSend channel: '#information-and-event',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        failure{
            slackSend channel: '#information-and-event',
                  color: 'bad',
                  message: "The pipeline ${currentBuild.fullDisplayName} failed."
        }
    }
}