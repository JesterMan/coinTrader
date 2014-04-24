json.array!(@trades) do |trade|
  json.extract! trade, :id, :action_type, :valuation, :amount, :expiration, :active, :executed, :suspended, :user_id
  json.url trade_url(trade, format: :json)
end
