class Types::QueryType < Types::BaseObject
  # First describe the field signature:
  field :company, Types::CompanyType, null: true do
    description "Find a post by ID"
    argument :id, ID, required: true
  end

  def company(id:)
    Company.find(id)
  end
end
