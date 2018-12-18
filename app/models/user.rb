# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  session_token   :string           not null
#  password_digest :string           not null
#  username        :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  dob             :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  address         :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :integer          not null
#  county          :string           not null
#  country         :string           not null
#  email           :string           not null
#  home_phone      :string           not null
#  mobile_phone    :string
#  work_phone      :string
#  preferred_phone :string           default("home"), not null
#

class User < ApplicationRecord
    
    validates :username, :session_token, :password_digest, :address, :city, :state, :zip, :county, :country, :email, :home_phone, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    attr_reader :password
    
    has_many :appointments
    has_many :providers, through: :appointments
    has_many :clinics, through: :providers

    after_initialize :ensure_token

    def self.find_by_cred(username, password)
        user = User.find_by(username: username)
        
        return nil unless user

        user.valid_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        generate_unique_token
        self.save!
        self.session_token
    end
    
    private

    def ensure_token
        generate_unique_token unless self.session_token
    end

    def generate_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_token
        self.session_token = generate_token
        while User.find_by(session_token: self.session_token)
            self.session_token = generate_token
        end
        self.session_token
    end

end
