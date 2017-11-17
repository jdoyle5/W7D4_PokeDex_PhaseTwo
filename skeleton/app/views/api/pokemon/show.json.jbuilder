json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves
  json.image_url asset_path(@pokemon.image_url)
end

json.items do
  json.array! @pokemon.items, :id, :pokemon_id, :name, :price, :happiness, :image_url
end
