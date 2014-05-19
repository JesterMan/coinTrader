class Trade < ActiveRecord::Base
	belongs_to :user
	attr_accessible :action_type, :valuation, :amount, :expiration, :suspended

end
