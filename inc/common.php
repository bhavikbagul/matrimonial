<?php
//define('base_url','http://localhost/matrimonial/');
define('base_url','http://182.19.22.141/matrimonial/');
define('asset_url',base_url.'assets/');
$username = "root";
$dbname = "matrimonial";
$password = "";
$servername = "localhost";
//ini_set("session.gc_maxlifetime", 43200);
try {
    //$conn = new PDO("mysql:host=$servername;dbname=sinfradb", $username, $password);
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    //echo "Connected successfully"; 
	 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 /*$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES,false); 
	 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
	 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);*/
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
	
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

//$redis = new Redis();
//$redis->connect('174.142.75.140', 6379);
//$redis->connect('127.0.0.1', 6379);
function paginate_function($item_per_page, $current_page, $total_records, $total_pages)
{
    $pagination = '';
    if($total_pages > 0 && $total_pages != 1 && $current_page <= $total_pages){ //verify total pages and current page number
        $pagination .= '<ul class="pagination">';
        
        $right_links    = $current_page + 5; 
        $previous       = $current_page - 5; //previous link 
        $next           = $current_page + 1; //next link
        $first_link     = true; //boolean var to decide our first link
        
        if($current_page > 1){
			$previous_link = ($previous==0)? 1: $previous;
            $pagination .= '<li class="first"><a href="javascript:void(0)" data-page="1" title="First">&laquo;</a></li>'; //first link
            $pagination .= '<li><a href="javascript:void(0)" data-page="'.$previous_link.'" title="Previous">&lt;</a></li>'; //previous link
                for($i = ($current_page-2); $i < $current_page; $i++){ //Create left-hand side links
                    if($i > 0){
                        $pagination .= '<li><a href="javascript:void(0)" data-page="'.$i.'" title="Page'.$i.'">'.$i.'</a></li>';
                    }
                }   
            $first_link = false; //set first link to false
        }
        
        if($first_link){ //if current active page is first link
            $pagination .= '<li class="first active">'.$current_page.'</li>';
        }elseif($current_page == $total_pages){ //if it's the last active link
            $pagination .= '<li class="last active">'.$current_page.'</li>';
        }else{ //regular current link
            $pagination .= '<li class="active">'.$current_page.'</li>';
        }
                
        for($i = $current_page+1; $i < $right_links ; $i++){ //create right-hand side links
            if($i<=$total_pages){
                $pagination .= '<li><a href="#" data-page="'.$i.'" title="Page '.$i.'">'.$i.'</a></li>';
            }
        }
        if($current_page < $total_pages){ 
				$next_link = ($i > $total_pages) ? $total_pages : $i;
                $pagination .= '<li><a href="#" data-page="'.$next_link.'" title="Next">&gt;</a></li>'; //next link
                $pagination .= '<li class="last"><a href="#" data-page="'.$total_pages.'" title="Last">&raquo;</a></li>'; //last link
        }
        
        $pagination .= '</ul>'; 
    }
    return $pagination; //return pagination links
}
function getMatID($matid = 'MAT'){
	global $conn;
	$random_id_length = 5; 
	$max_q = $conn->prepare("SELECT MAX(reg_id) as max_no FROM register");
	$max_q->execute();
	$max_row = $max_q->fetchAll(PDO::FETCH_ASSOC);
	$max_id = $max_row[0]['max_no']+1;
	$rnd_id = str_pad($max_id,$random_id_length,'0',STR_PAD_LEFT); 
	return $matid.$rnd_id;
}

function getSubCaste(){
	global $conn;
	
	$qry = "SELECT id,subcast FROM master_subcast WHERE status='1' ORDER BY subcast";
	
		$res=$conn->prepare($qry);
		$res->execute();
		$res = $res->fetchAll(PDO::FETCH_ASSOC);
		foreach($res as $row){
			$resVNArr[] = $row;							
		}						
		
	return $resVNArr;
}

function getMotheToungue(){
	global $conn;
	$qry = "SELECT id,mother_tongue FROM master_mother_tongue WHERE status='1' ORDER BY mother_tongue";
	
		$res=$conn->prepare($qry);
		$res->execute();
		$res = $res->fetchAll(PDO::FETCH_ASSOC);
		foreach($res as $row){
			$resVNArr[] = $row;							
		}						
		
	return $resVNArr;
}

function getCountry(){
	global $conn;
	$qry = "SELECT country_id,name FROM country_master WHERE status='1' ORDER BY name";
	
		$res=$conn->prepare($qry);
		$res->execute();
		$res = $res->fetchAll(PDO::FETCH_ASSOC);
		foreach($res as $row){
			$resVNArr[] = $row;							
		}						
		
	return $resVNArr;
}

function random($length, $chars = '')
{
	if (!$chars) {
		$chars = implode(range('a','z'));
		$chars .= implode(range('1','9'));
	}
	$shuffled = str_shuffle($chars);
	return substr($shuffled, 0, $length);
}

function getValidationKey(){
	$key = random(4).random(4).random(4).random(4);
	return strtoupper($key);
}
?>