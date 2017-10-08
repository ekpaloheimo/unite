server 'unite-staging', user: 'ubuntu', roles: %w{app db web}
set :deploy_to, '/var/www/testi.unite-the-armies.org'
set :ssh_options, { forward_agent: true }
