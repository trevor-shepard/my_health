class User < ApplicationRecord
    
    validates :username, :session_token, :password_digest, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    attr_reader :password
    
    after_initialize :ensure_token

    def self.find_by_cred(username, password)
        user = User.find_by(username: username)
        
        return nil unless user

        user.valid_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.session_token = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.session_token).is_password?(password)
    end

    def reset_token!
        self.session_token = generate_token
        self.save!
        self.session_token
    end

    def ensure_token
        self.session_token || = generate_token
    end

    private

    def generate_token
        SecureRandom.urlsafe_base64
    end

end
