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
                // Inicia o servidor em segundo plano e redireciona a saída para um arquivo de log
                sh 'nohup node app.js > output.log 2>&1 &'
                echo 'Aplicação implantada com sucesso!'
            }
        }

        stage('Verify Deployment') {
            steps {
                // Verifica se a aplicação está respondendo na porta esperada
                script {
                    // Substitua a URL abaixo pela URL e porta corretas do seu servidor
                    def response = sh(script: 'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', returnStdout: true).trim()
                    if (response == '200') {
                        echo 'Aplicação está rodando corretamente!'
                    } else {
                        error 'Erro: A aplicação não está respondendo como esperado!'
                    }
                }
            }
        }
    }
}
