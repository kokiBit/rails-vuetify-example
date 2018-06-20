require 'rails_helper'

RSpec.describe Company, type: :model do
  # 名前があれば有効な状態であること
  it "is valid with a name" do
    company = Company.new(
      name: "Dragon Company"
    )
    expect(company).to be_valid
  end
end
