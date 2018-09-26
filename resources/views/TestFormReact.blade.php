@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="form-group">
              <label for="">Tiem Kiem</label>
              <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                class="form-control" name="timKiem" id="" aria-describedby="helpId" placeholder="">
              <input type="submit" value="Tim kiem">
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                    <table class="table table-{1:striped|sm|bordered|hover|inverse} table-inverse table-responsive">
                            <thead class="thead-inverse|thead-default">
                                <tr>
                                    <th>STT</th>
                                    <th>Ten</th>
                                    <th>Dien thoai</th>
                                    <th>Quyen</th>
                                    <th>Hanh dong</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ahihi</td>
                                        <td>123123123</td>
                                        <td>ADMIN</td>
                                        <td><a name="" id="" class="btn btn-primary|secondary|success|danger|warning|info|light|dark|link" href="#" role="button">Sua</a>
                                        <a name="" id="" class="btn btn-primary|secondary|success|danger|warning|info|light|dark|link" href="#" role="button">xoa</a>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                        </table>
            </div>  
            <div class="col-md-3">
                <div class="form-group">
                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action ">Hien form</button>
                            <button type="button" class="list-group-item list-group-item-action">Dong</button>
                            </div>
                    <label for="">Ten</label>
                    <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" name="ten" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    <label for="">So dien thoai</label>
                    <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" name="soDienThoai" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    <label for="">Phan quyen</label>
                    <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" name="phanQuyen" id="" class="form-control" placeholder="" aria-describedby="helpId">
                    <input name="" id="" class="btn btn-primary|secondary|success|danger|warning|info|light|dark|link" type="submit" value="Them">
                </div>
            </div>
        </div>
    </div>
@endsection