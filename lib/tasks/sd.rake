namespace :sd do
  task populate_votes: :environment do
    i = 1
    Country.codes.each do |country|  
      email = "foobar#{i}@foobar.com"
      values = {
        country: country, 
        name: "foobar", 
        email: email,
        email_confirmation: email,
        ip: "0.0.0.0"
        }
      vote = Vote.create(values)
      puts "adding vote #{vote.inspect}"
      i += 1
    end

    VoteCount.all.each do |vote|
      vote.update(count: rand(1000000))
      puts "updating vote #{vote.inspect}"
    end
  end

end
