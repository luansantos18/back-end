const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {

        case 'dev':
            return {
                jwt_pass: 'senha',
                jwt_experes_in: '7d'

            }

        case 'hml':
            return {
                jwt_pass: 'senha',
                jwt_experes_in: '7d'

            }

        case 'prod':
            return {
                jwt_pass: 'senha',
                jwt_experes_in: '7d'

            }

    }

}

module.exports = config();