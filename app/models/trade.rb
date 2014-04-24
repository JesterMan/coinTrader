class Trade < ActiveRecord::Base
	belongs_to :user
	attr_accessible :type, :valuation, :amount, :expiration, :suspended

end
