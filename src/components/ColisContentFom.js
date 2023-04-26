import React from 'react'

const ColisContentFom = () => {
  return (
    <div>
                    <div className="space-y-4 p-2 px-4">
                      <div className="flex justify-between items-center">
                        <div className="flex">
                          <div className="py-2 flex flex-col items-center justify-center">
                            <div className="h-4 w-0 border-2 border-green-600 bg-green-600" />
                            <div className="text-3xl text-green-600">
                            <input
                                    type="radio"
                                    name="colis"
                                    id=""
                                    className="h-4 w-4"
                                  />
                            </div>
                            <div className="h-8 w-0 border-2 border-green-600 bg-green-600 " />
                            <div className="h-6 w-6 rounded-full border-2 border-green-600 my-1" />
                            <div className="h-8 w-0 border-2 border-green-600 bg-green-600" />
                            <div className="h-6 w-6 rounded-full border-2 border-green-600 my-1" />
                            <div className="h-8 w-0 border-2 border-green-600 bg-green-600" />
                            <div className="h-6 w-6 rounded-full border-2 border-green-600 my-1" />
                            <div className="h-4 w-0 border-2 border-green-600 bg-green-600" />
                          </div>
                          <div className="flex flex-col py-6 gap-9 ml-4">
                            <p className="text-lg font-semibold">
                              Enregistrement de colis
                            </p>
                            <p className="text-lg">Expediteur</p>
                            <p className="text-lg">Destinataire</p>
                            <p className="text-lg">Statut de livraison(1)</p>
                          </div>
                        </div>
                        <div className="mt-8 border-green-600 border-2 rounded-md w-3/4 shadow-md">
                          <p className="py-2 bg-green-100 px-6 font-semibold text-sm text-green-600">
                            Enregistrement de colis
                          </p>
                          <div className="grid grid-cols-2 gap-x-32 gap-6 border-t-2 border-green-600 py-8 px-6">
                            <div>
                              <p>Type de Trafic</p>
                              <div className="w-full flex items-center mt-3 gap-12">
                                <div className="flex items-center gap-4">
                                  <label htmlFor="">National</label>
                                  <input
                                    type="radio"
                                    name="type"
                                    id=""
                                    className="h-4 w-4"
                                  />
                                </div>
                                <div className="flex items-center gap-4">
                                  <label htmlFor="">International</label>
                                  <input
                                    type="radio"
                                    name="type"
                                    id=""
                                    className="h-4 w-4"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <p>Type d'envoi</p>
                              <div className="w-full flex items-center mt-3 gap-12">
                                <div className="flex items-center gap-4">
                                  <label htmlFor="">Colis</label>
                                  <input
                                    type="radio"
                                    name="colis"
                                    id=""
                                    className="h-4 w-4"
                                  />
                                </div>
                                <div className="flex items-center gap-4">
                                  <label htmlFor="">Courrier</label>
                                  <input
                                    type="radio"
                                    name="colis"
                                    id=""
                                    className="h-4 w-4"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <p>Poids</p>
                              <input
                                type="text"
                                id="phone"
                                class="rounded-md w-full h-10 mt-1 border border-gray-300 focus:border-primary focus:outline-none px-3"
                              />
                            </div>
                            <div>
                              <p>Prix</p>
                              <input
                                type="text"
                                id="phone"
                                class="rounded-md w-full h-10 mt-1 border border-gray-300 focus:border-primary focus:outline-none px-3"
                              />
                            </div>
                            <div>
                              <p>Numéro de colis</p>
                              <input
                                type="text"
                                id="phone"
                                class="rounded-md w-full h-10 mt-1 border border-gray-300 focus:border-primary focus:outline-none px-3"
                              />
                            </div>
                            <div>
                              <p>Date reçue pour la livraison</p>
                              <input
                                type="text"
                                id="phone"
                                class="rounded-md w-full h-10 mt-1 border border-gray-300 focus:border-primary focus:outline-none px-3"
                              />
                            </div>
          
                            <div className="col-span-2 flex justify-end">
                              
                                suivant
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}

export default ColisContentFom