              function Card(url, type){
                return(
              {item.type === {type} ? (
                <RestaurantImg
                  src={`${item.type === {type} ? `${item.imageURL}` : ""}`}
                  alt="img"
                />
              ) : (
                ""
              )}
              <div>
                <div>{item.type === {type} ? `${item.mealName}` : ""}</div>
                <div>{item.type === {type} ? `${item.businessHours}` : ""}</div>
                <div>{item.type === {type} ? `${item.location}` : ""}</div>
                <div>
                  {item.type === {type}
                    ? `${
                        item.information.length > 55
                          ? `${item.information.slice(0, 55)}...`
                          : item.information
                      }`
                    : ""}
                </div>
              </div>)
              }