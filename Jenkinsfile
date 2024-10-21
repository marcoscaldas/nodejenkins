pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Instala as dependências do Node.js
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Executa testes, se houver
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Empacota o projeto ou realiza qualquer build necessário
                echo 'Projeto construído com sucesso!'
            }
        }

        stage('Deploy') {
            steps {
                // Inicia o servidor (em produção, você usaria um gerenciador como PM2)
                sh 'node app.js &'
                echo 'Aplicação implantada com sucesso!'
            }
        }
    }
}
